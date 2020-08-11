import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherList: {
        marginTop: -40,
        
    },
    searchForm: {
        marginBottom: 3,
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputBlock: {
        width: '37%',
    },
    okButton: {
        marginVertical: 25,
        backgroundColor: '#04d361',
        height: 54,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    okButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }

});

export default styles;