const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: '#333e42',
    color: 'white',
    marginBottom: 10
  },
  title: {
    textAlign: 'center',
    "fontFamily": "\"Merriweather Sans\", sans-serif"
  },
  profile: {
    marginLeft: 20,
    lineHeight: '1.5',
    "fontFamily": "\"Work Sans\", sans-serif",
    [theme.breakpoints.down('md')]: {
      marginRight: '1em'
    }
  },
  profileTitle: { 
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  avatar: {
    margin: 'auto',
    marginTop: -5,
    width: 210,
    height: 210,
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      marginBottom: 10
    }
  },
  about: {
    textTransform: 'uppercase',
    marginLeft: 20,
    textAlign: 'left',
    lineHeight: '1.5',
    fontWeight: 'bold',
    "fontFamily": "\"Work Sans\", sans-serif",
    [theme.breakpoints.down('md')]: {
      display: 'inline-block'
    }
  },
  contact: {
    textAlign: 'center',
    fontSize: 20
  },
  link: {
    color: '#fff',
    textAlign: 'center',
    textDecoration: 'none'
  },
  icon: {
    color: '#fff'
  }
});

white:{
  color: '#fff'
}