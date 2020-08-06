import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';



import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPage() {
        navigate('Study');
    }



    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja Bem Vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}></Image>
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
                <RectButton onPress={handleNavigateToStudyPage} style={[styles.button, styles.buttonSecundary]}>
                    <Image source={giveClasses}></Image>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de conexões já realizadas {' '}
                <Image source={heartIcon}></Image>
            </Text>
        </View >
    );
}

export default Landing;