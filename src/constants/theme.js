import { Dimensions, Platform, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const { width, height } = Dimensions.get( 'window' );

/* *************** Colors ********** */

export const COLORS = {
  primary: '#022541',
  primaryLight: '#092C47',

  ligthBlue: "#4BB5FF",
  secondary: '#82D549',
  white: '#ffff',
  black: '#020000',
  gray: "#9E9E9E",
  gray1: "#D9D9D9",
  green: "#00C59A",
  gold: "#EFBD27",
  red: "#FF0000",
  transparent: "transparent"
};

const appTheme = { COLORS };

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
  Bold: 'Montserrat-Bold',
  Light: 'Montserrat-Light',
  Medium: 'Montserrat-Medium',
  Regular: 'Montserrat-Regular',
  Ionicons: 'Ionicons',
  AntDesign: 'AntDesign',
  EvilIcons: 'EvilIcons',
  Entypo: 'Entypo',
  FontAwesome: 'FontAwesome',
  Feather: 'Feather',
  MaterialIcons: 'MaterialIcons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Octicons: 'Octicons',
  SimpleLineIcons: 'SimpleLineIcons',
  Fontisto: 'Fontisto',
  Roboto_Regular: 'Roboto-Regular',
  Roboto_Medium: 'Roboto-Medium',
  Roboto_Bold: 'Roboto-Bold',

};

/* * Images * */
export const IMAGES = {

  logo: require( '../assets/images/logo.png' ),
  welcomeScreen1: require( '../assets/images/welcomeScreen1.png' ),
  welcomeScreen2: require( '../assets/images/welcomeScreen2.png' ),
  welcomeScreen3: require( '../assets/images/welcomeScreen3.png' ),
  ClientIcon: require( '../assets/images/ClientIcon.png' ),
  NotaryIcon: require( '../assets/images/NotaryIcon.png' ),
  forwardArrow: require( '../assets/images/forwardArrow.png' ),
  Wallet: require( '../assets/images/wallet.png' ),
  user: require( '../assets/images/user.png' ),
  downloadIcon: require( '../assets/images/downloadIcon.png' ),
  camera: require( '../assets/images/camera.png' ),
  verifiedbadge: require( '../assets/images/verifiedbadge.png' ),
  user2: require( '../assets/images/user2.png' ),
  user3: require( '../assets/images/user3.png' ),
  user4: require( '../assets/images/user4.png' ),
  callMissed: require( '../assets/images/callMissed.png' ),
  callRecevied: require( '../assets/images/callRecevied.png' ),
  searchIcon: require( '../assets/images/searchIcon.png' ),
  settingIcon: require( '../assets/images/settingIcon.png' ),
  phoneIcon: require( '../assets/images/phoneIcon.png' ),
  mailIcon: require( '../assets/images/mailIcon.png' ),
  pencilIcon: require( '../assets/images/pencilIcon.png' ),
  dummyDoc: require( '../assets/images/dummyDoc.png' ),
  crossIcon: require( '../assets/images/crossIcon.png' ),
  reviewCardBg: require( '../assets/images/reviewCardBg.png' ),
  transIcon: require( '../assets/images/transIcon.png' ),
  dollarIcon: require( '../assets/images/dollarIcon.png' ),
  calendarIcon: require( '../assets/images/calendarIcon.png' ),
  routingIcon: require( '../assets/images/routingIcon.png' ),
  TabUnSelectedAppointmentIcon: require( '../assets/images/TabUnSelectedAppointmentIcon.png' ),
  TabSelectedAppointmentIcon: require( '../assets/images/TabSelectedAppointmentIcon.png' ),
  TabUnSelectedHome: require( '../assets/images/TabUnSelectedHome.png' ),
  TabSelectedHome: require( '../assets/images/TabSelectedHome.png' ),
  TabUnSelectedProfile: require( '../assets/images/TabUnSelectedProfile.png' ),
  TabSelectedProfile: require( '../assets/images/TabSelectedProfile.png' ),
  TabUnSelectedNotification: require( '../assets/images/TabUnSelectedNotification.png' ),
  TabSelectedNotification: require( '../assets/images/TabSelectedNotification.png' ),
  TabUnSelectedServiceIcon: require( '../assets/images/TabUnSelectedServiceIcon.png' ),
  TabSelectedServiceIcon: require( '../assets/images/TabSelectedServiceIcon.png' ),
  notification: require( '../assets/images/notification.png' ),
  RealState: require( '../assets/images/RealState.png' ),
  profileIcon: require( '../assets/images/profileIcon.png' ),
  lock: require( '../assets/images/lock.png' ),
  gradientCheck: require( '../assets/images/gradientCheck.png' ),
  gradientCross: require( '../assets/images/gradientCross.png' ),
  gradientquestionMark: require( '../assets/images/gradientquestionMark.png' ),






};

/* * Screens * */
export const SCREENS = {
  Splash: 'Splash',
  welcomeScreen: 'welcomeScreen',
  UserSelection: "UserSelection",
  login: 'login',
  ClientRegister: 'ClientRegister',
  SignUpSkill: 'SignUpSkill',
  forget: "forget",
  Otp: "Otp",
  bottamTab: "BottamTab",
  bottamTabCLient: "bottamTabCLient",

  // =================Notary==================
  NotaryHome: "NotaryHome",
  NotaryAppointment: "NotaryAppointment",
  NotaryProfile: "NotaryProfile",
  NotaryNotifications: "NotaryNotifications",
  NotaryWallet: "NotaryWallet",
  NotarySettings: "NotarySettings",
  PriceSettings: "PriceSettings",
  CalenderSettings: "CalenderSettings",
  TravelSettings: "TravelSettings",

  // =======================Client ==================
  ClientHome: "ClientHome",
  ClientService: "ClientService",
  ClientAppointment: "ClientAppointment",
  ClientProfile: "ClientProfile",
  NotaryDetail: "NotaryDetail",


  AppointmentDetails: "AppointmentDetails",
  AppointmentDetailSheet: "AppointmentDetailSheet"
};

export const SIZES = {
  // global sizes
  five: height * 0.0055,
  ten: height * 0.011,
  fifteen: height * 0.017,
  twenty: height * 0.023,
  twentyWidth: width * 0.05,
  twentyFive: height * 0.03,
  twentyFiveWidth: width * 0.08,
  fifty: height * 0.075,
  fiftyWidth: width * 0.13,

  // font sizes
  h16: width * 0.034,
  h18: width * 0.038,
  h20: width * 0.042,
  h22: width * 0.048,
  h24: width * 0.055,
  body08: width * 0.024,
  body10: width * 0.028,
  body12: width * 0.032,
  body14: width * 0.036,
  body16: width * 0.04,
  body18: width * 0.045,
};

export const FONTS = {
  boldFont16: {
    fontFamily: FONTFAMILY.Roboto_Bold,
    fontSize: SIZES.h16,
    color: COLORS.black,
    // fontWeight: '700',
  },
  boldFont18: {
    fontFamily: FONTFAMILY.Roboto_Bold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  boldFont20: {
    fontFamily: FONTFAMILY.Roboto_Bold,
    fontSize: SIZES.h20,
    color: COLORS.black,


  },
  boldFont22: {
    fontFamily: FONTFAMILY.Roboto_Bold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  boldFont24: {
    fontFamily: FONTFAMILY.Roboto_Bold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  semiBoldFont16: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h16,
    color: COLORS.black,
  },
  semiBoldFont18: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  semiBoldFont20: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  semiBoldFont22: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  semiBoldFont24: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  mediumFont10: { fontFamily: FONTFAMILY.Roboto_Medium, fontSize: SIZES.body10 },
  mediumFont12: { fontFamily: FONTFAMILY.Roboto_Medium, fontSize: SIZES.body12 },
  mediumFont14: { fontFamily: FONTFAMILY.Roboto_Medium, fontSize: SIZES.body14 },
  mediumFont16: { fontFamily: FONTFAMILY.Roboto_Medium, fontSize: SIZES.body16 },
  mediumFont18: { fontFamily: FONTFAMILY.Roboto_Medium, fontSize: SIZES.body18 },
  regularFont10: { fontFamily: FONTFAMILY.Roboto_Medium, fontSize: SIZES.body10 },
  regularFont12: { fontFamily: FONTFAMILY.Roboto_Medium, fontSize: SIZES.body12 },
  regularFont14: { fontFamily: FONTFAMILY.Roboto_Medium, fontSize: SIZES.body14 },
  regularFont16: { fontFamily: FONTFAMILY.Roboto_Medium, fontSize: SIZES.body16 },
  regularFont18: { fontFamily: FONTFAMILY.Roboto_Medium, fontSize: SIZES.body18 },
  lightFont08: { fontFamily: FONTFAMILY.Roboto_Regular, fontSize: SIZES.body08 },
  lightFont10: { fontFamily: FONTFAMILY.Roboto_Regular, fontSize: SIZES.body10 },
  lightFont12: { fontFamily: FONTFAMILY.Roboto_Regular, fontSize: SIZES.body12 },
  lightFont14: { fontFamily: FONTFAMILY.Roboto_Regular, fontSize: SIZES.body14 },
  lightFont16: { fontFamily: FONTFAMILY.Roboto_Regular, fontSize: SIZES.body16 },
  lightFont18: { fontFamily: FONTFAMILY.Roboto_Regular, fontSize: SIZES.body18 },
};

export const STYLES = StyleSheet.create( {
  container: {
    flex: 1,
    paddingHorizontal: SIZES.fifteen,
    paddingTop:
      Platform.OS === 'android'
        ? SIZES.twentyFive * 1.3
        : getStatusBarHeight( true ),
    backgroundColor: COLORS.primary,
  },
  splashLogo: {
    width: SIZES.fifteen * 13,
    height: SIZES.fifteen * 13,
    alignSelf: 'center',
  },
  loginView: {
    flex: 1,
    width: '100%',
    marginTop: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
  },
  lightText: {
    fontFamily: FONTFAMILY.Light,
  },
  mediumText: {
    fontFamily: FONTFAMILY.Medium,
  },
  boldText: {
    fontFamily: FONTFAMILY.Bold,
  },
  headingText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twenty + 5,
    color: COLORS.black,
  },
  paragraphText: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.fifteen - 1,
    color: COLORS.black,
  },
  drawerItem: {
    alignItems: 'center',
    borderRadius: SIZES.fifteen,
    paddingVertical: SIZES.fifteen,
    paddingHorizontal: SIZES.fifteen,
  },
  drawerIcon: {
    fontSize: SIZES.fifteen + 10,
  },
  drawerText: {
    fontSize: SIZES.fifteen,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    marginHorizontal: SIZES.fifteen - 5,
  },
  horLine: {
    height: 0.3,
    marginVertical: SIZES.fifteen,
    backgroundColor: COLORS.brownGrey,
  },
  shadow: {
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    shadowColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
} );

export const CONSTANTS = {

  API_URLS: {
    BASE: 'https://dashboard.wasim-app.com/api/v2/',
    // BASE_VENDOR: 'http://porter.reignsol.net/api/v1/vendor/',
    IMAGE: 'http://porter.reignsol.net/',
    LOGIN: 'auth/login',
    SIGNUP: 'auth/signup',
    FORGOTPASSWORD: 'auth/password/forget_request',
    ResendCode: 'auth/password/resend_code',
    NewPass: 'auth/password/confirm_reset',
    Products: 'products?page=',
    ProductById: 'products/',
    reviewById: 'reviews/product/',
    SellerReviewById: 'reviews/seller/',
    attributes: 'attributes/attributesList',
    postProduct: 'products/seller/createstore2',
    relatedProduct: 'products/related/',
    searchProduct: 'products/search',
    storeProducts: "products/seller",
    shippingAddress: 'user/shipping/create',
    UpdateShippingAddress: 'user/shipping/update',
    deleteShippingAddress: 'user/shipping/delete/',
    getShippingAddress: "user/shipping/address",
    updateDefaultAddress: "user/shipping/updateSetdefaultAddress",
    AddToWishList: "createdelwishlists",
    getWishList: "wishlists/",
    deleteWhishLish: "deletewishlists/",
    placedOrder: "order/place",
    refreshToken: "fcm/savedevicetoken/",
    getNotification: "fcmnotification/fetch/",
    refund: "refund-request/send",
    refundSeller: "refund-request/seller",
    categories: "categories",
    brand: "brands",
    submitReview: "reviews/submit",
    refundList: "refund-request/"

  },

  /* * FirebaseConstants * */
  FIREBASE: {
    CHAT: 'Chat',
    MESSAGES: 'messages',
    USERS: 'Users',
    CHATHEADS: 'ChatHeads',
    READ: 'read',
    TOKEN: 'Tokens',
    FCM: 'https://fcm.googleapis.com/fcm/send',
  },

};
