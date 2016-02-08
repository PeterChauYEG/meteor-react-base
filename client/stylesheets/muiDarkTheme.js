import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing,
  zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.indigo900,
    primary2Color: Colors.indigo700,
    primary3Color: Colors.indigo200,
    accent1Color: Colors.indigo900,
    accent2Color: Colors.indigo300,
    accent3Color: Colors.indigo800,
    textColor: Colors.indigo900,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.indigo600,
    disabledColor: ColorManipulator.fade(Colors.indigo500, 0.3),
    pickerHeaderColor: Colors.indigo900,
  },
};
