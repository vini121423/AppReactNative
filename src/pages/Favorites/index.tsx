import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';


function Favorites() {
    return (
        <View style={styles.container}>
           
                <PageHeader title="Meus Proffys favoritos"></PageHeader>
            
        </View>
    );
}

export default Favorites;