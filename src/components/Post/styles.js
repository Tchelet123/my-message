import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  
 
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  content:{
marging:'10px',
  },
  overlay: {
    color: 'black',
    
  },
 
  
  details: {

    margin: '5px',
    color:'green',
  wordBreak: 'break-all',
  hyphens: 'auto',
  },
  button: {
    
    margin: 20,
  },
});