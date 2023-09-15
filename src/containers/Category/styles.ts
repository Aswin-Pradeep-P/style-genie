import { colors } from '@Constants/colors';

const ISSERVER = typeof window === 'undefined';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    backgroundColor: colors.WHITE,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: colors.WHITE,
    margin: '16px',
    marginBottom: 0,
    cursor: 'pointer',
    borderRadius: '16px',
    WebkitTapHighlightColor: 'transparent'
  },
  card: {
    display: 'flex',
    flexDirection: 'row' as const,
    height: '100px',
    textDecoration: 'none'
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    margin: 'auto',
    width: !ISSERVER && window.innerWidth >= 450 ? '30px' : '16px',
    height: '30px'
  },
  subArrow: {
    margin: 'auto 0',
    width: !ISSERVER && window.innerWidth >= 450 ? '20px' : '12px'
  },
  cardStripe: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px 0 16px 8px',
    margin: 'auto 16px',
    borderTop: '1px solid green',
    textDecoration: 'none',
    color: colors.BLACK,
    fontSize: !ISSERVER && window.innerWidth >= 450 ? '14px' : '12px'
  },
  cardStripeTitle: {
    width: '100%'
  },
  titleContainer: {
    width: '75%',
    display: 'table'
  },
  textContainer: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  imageContainer: {
    margin: '16px',
    maxWidth: '68px'
  },
  image: {
    aspectRatio: 1,
    height: '100%',
    borderRadius: '10px'
  },
  contentWrapper: { display: 'flex', flexDirection: 'column', padding: '100px 0 90px 0', backgroundColor: colors.WHITE },
  line: {},
  title: {
    fontWeight: 600,
    fontSize: '16px',
    color: colors.FONT_SECONDARY,
    lineHeight: '24px'
  },
  subTitle: {
    fontWeight: 400,
    fontSize: '10px',
    color: colors.FONT_SECONDARY,
    lineHeight: '16px'
  },
  footerWrapper: {
    display: 'flex',
    bottom: 0,
    position: 'sticky'
  }
};

export default styles;
