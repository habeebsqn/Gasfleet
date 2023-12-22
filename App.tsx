import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider} from 'react-redux';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import store from './App/store';
import Routes from './App/routes';
type SectionProps = PropsWithChildren<{}>;

function Section({children}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return <View>{children}</View>;
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'light';
  const queryClient = new QueryClient();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaView style={[styles.container, backgroundStyle]}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />

          <Routes />
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
