import Constants from 'expo-constants';
import {
  Dimensions, StyleSheet, TouchableOpacity, Button, Text,
  View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {signInScreenStyles} from './signInScreenStyles';
import {useAuth} from '../contexts/Auth';
import {SvgUri} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';

const baseAddressUrl = Constants.expoConfig.extra.baseAddressUrl.replace(
  /^.(.*).$/, '$1'
);

export const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const componentHeight = Dimensions.get('window').height - (
    insets.top + insets.bottom
  );
  const componentWidth = Dimensions.get('screen').width;
  const styles = StyleSheet.create(signInScreenStyles(
    insets.top, insets.bottom, componentHeight, componentWidth));
  const auth = useAuth();
  const signIn = async () => {
    await auth.signIn();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.row1}>
          <View style={styles.row1vector}>
            <SvgUri
              width="100%"
              height="100%"
              uri={`${
                baseAddressUrl
              }/assets/static/vector_graphics/page-login-header-illustration.svg`}
            />
          </View>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.row2touchableOpacity}
            onPress={signIn}
          >
            <View style={styles.row2touchableOpacityCol1}>
              <SvgUri
                width="100%"
                height="100%"
                uri={`${
                  baseAddressUrl
                }/assets/static/vector_graphics/google-logo.svg`}
              />
            </View>
            <View style={styles.row2touchableOpacityCol2}>
              <Text style={styles.row2touchableOpacityText}>
                SIGN IN WITH GOOGLE!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.row3}>
          <View style={styles.row3col1}>
            <Icon name='information-circle-outline' color='hsl(0, 0%, 100%)'
              size={componentHeight * 0.03} />
          </View>
          <View style={styles.row3col2}>
            <Text style={styles.row3col2text}>
              เข้าสู่ระบบด้วยบัญชีของคณะเพื่อเข้าสู่คอร์สเรียน!
            </Text>
          </View>
        </View>
        <View style={styles.row4} />
        <View style={styles.row5}>
          <Text style={styles.row5text}>
            <View style={styles.row5textContainer}>
              <SvgUri
                width={componentHeight * 0.025}
                height={componentHeight * 0.025}
                uri={`${
                  baseAddressUrl
                }/assets/static/vector_graphics/copyright.svg`}
              />
            </View>
            2022 | school of Information Technology
            | King Mongkut's Institute of Technology Ladkrabang
          </Text>
        </View>
      </View>
    </View>
  );
};