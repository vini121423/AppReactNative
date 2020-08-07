import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257e5',
        flex: 1,
        justifyContent: 'center',
		paddingTop:60,
		paddingLeft:20,
		paddingRight:20,
		paddingBottom:40
		
    },
    banner: {
        width: '100%',
        resizeMode: 'contain',
        // Redimensionar a imagem de maneira que fique completa //
    },
    title: {
        color: '#fff',
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
        textAlign:'center'
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },
    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
        textAlign:'center',
		alignItems:'center'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 20,
		alignItems:'center',
		textAlign:'center'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },
    buttonSecundary: {
        backgroundColor: '#04d361'
    },
    totalConnections:{
        fontFamily:'Poppins_400Regular',
        color:'#d4c2ff',
        fontSize:12,
        lineHeight:20,
        maxWidth:140,
        marginTop:40,
        textAlign:'center',
		alignItems:'center',
		marginLeft:85,
		marginBottom:30
    }
});

export default styles;