import React, { useState } from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import PageHeader from '../../components/PageHeader';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(resp => {
            if (resp) {
                const favoritedTeachers = JSON.parse(resp);
                const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })
                setFavorites(favoritedTeachersId);
            }
        });
    }


    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');


    async function handleFiltersSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        setIsFilterVisible(false);
        setTeachers(response.data);

    }

    function handlerToggleFilterVisible() {
        setIsFilterVisible(!isFilterVisible);
    }

    useFocusEffect(()=>{
        loadFavorites();
    })
    return (
        <View>
            <PageHeader title="Proffys disponiveis" headerRight={(
                <BorderlessButton onPress={handlerToggleFilterVisible}>
                    <Feather name="filter" color="#fff"></Feather>
                </BorderlessButton>
            )}>
                {isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Escolha a matéria"
                            placeholderTextColor="#c1bccc"></TextInput>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Escolha o dia"
                                    placeholderTextColor="#c1bccc"></TextInput>
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Escolha o horário"
                                    placeholderTextColor="#c1bccc"></TextInput>
                            </View>
                        </View>
                        <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}><Text style={styles.submitText}>Filtrar</Text></RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView style={styles.teacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                {teachers.map((teacher: Teacher) =>
                    <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)} />
                )}
            </ScrollView>
        </View>
    );
}

export default TeacherList;