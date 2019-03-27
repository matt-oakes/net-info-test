import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

import NetInfo from '@react-native-community/netinfo';

export default class App extends Component {
  state = { netInfo: null };

  getConnectionInfo = async () => {
    const netInfo = await NetInfo.getConnectionInfo();
    this.setState({ netInfo });
  };

  render() {
    const { netInfo } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to NetInfoTest!</Text>

        <Button onPress={this.getConnectionInfo} title="Gather net info" />
        <Text style={styles.instructions}>{netInfo ? JSON.stringify(netInfo) : 'No info gathered.'}</Text>

        <Text style={styles.welcome}>Steps to test:</Text>
        <Text style={styles.instructions}>1. Enable WiFi (disable other connections).</Text>
        <Text style={styles.instructions}>2. Gather information.</Text>
        <Text style={styles.instructions}>3. Put the app in background.</Text>
        <Text style={styles.instructions}>4. Disable Wifi connection.</Text>
        <Text style={styles.instructions}>5. Resume the app in foreground.</Text>
        <Text style={styles.instructions}>6. Gather information.</Text>
        <Text style={styles.instructions}>7. Try the test inverting step 1 and 4.</Text>
        <Text style={styles.welcome}>Expectations on Android:</Text>
        <Text style={styles.instructions}>Sometimes the gathered info is outdated.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10,
    marginBottom: 5,
  },
});
