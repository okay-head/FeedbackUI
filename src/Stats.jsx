function Stats({props}) {
   let total = 0;
   props.forEach(x=> total+=Number(x.fb_rating))
   const average = props.length && (total/props.length).toFixed(1);
   return (
         <div className="stats">
            <div className="count">{props.length} Rating(s)</div>
            <div className="average">Average rating: {average}</div>
         </div>
      );
}

export default Stats;

