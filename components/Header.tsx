import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mi App Notion</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;
