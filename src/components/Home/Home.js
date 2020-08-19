import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { Text, View, ImageBackground, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles.js'

const Home = () => (
    <View style={styles.container}>

        <Text style={styles.text}>
            Welcome to Forge!
      </Text>
        <Text style={styles.text}>
            Forge is a passion project of mine to help D&D become a more accessible hobby. My app will walk you through the character
            creation process and provide explinations for most of the tricky parts of creating a character. Good luck in your adventures!
      </Text>
        <Text style={styles.text}>Games give you a chance to excel, and if you're playing in good company you don't
        even mind if you lose because you had the enjoyment of the company
        during the course of the game. -- Gary Gygax</Text>
    </View>
);
export default Home;