import './Card.css';
function Card(props){
    //to make sure your classname is useable in your custom component
    const classes = 'card ' + props.className;
   
   return(//to set reuseable wrapper component
<div className={classes}>
    {props.children}
</div>
    )
}
export default Card;