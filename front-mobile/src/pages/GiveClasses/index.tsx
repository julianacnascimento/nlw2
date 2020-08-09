import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import giveClassesImageBg from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';

export default function GiveClasses(){

    const { goBack } = useNavigation();

    function handleNavigateBack(){
        goBack();
    }
    return (
        <View style={styles.container}>

            <ImageBackground 
                resizeMode="contain" 
                style={styles.content} 
                source={giveClassesImageBg}
            >
                <Text style={styles.title} >
                    Quer ser um Proffy?
                </Text>
                <Text style={styles.description} > 
                    Para começar você precisa de cadastrar como professor na nossa plataforma web.                     
                </Text>

                <RectButton onPress={handleNavigateBack} style={styles.okButton}> 
                    <Text style={styles.okButtonText}>Tudo bem</Text>
                </RectButton>

            </ImageBackground>


        </View>
    )
}