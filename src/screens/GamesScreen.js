import React from "react";
import { StatusBar } from "react-native-paper";
import { SafeAreaView, View, StyleSheet } from "react-native";

import { GameInfo } from "../components/GameInfo";

export const GamesScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <SearchBar />
        </View>
        <View style={styles.list}>
            <GameInfo />
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    search: {
        padding: 16,
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: "blue",
    },
});