import MoreStyledElement from './MoreStyledElement';
import {AiOutlineCloseCircle } from 'react-icons/ai';
function Card({index,props ,deleteElement}) {
   return (
      <div className="card">
         <div className="blog_post">
            <span onClick={()=>deleteElement(index)} className="close">
               <AiOutlineCloseCircle />
            </span>
            <div className="img_pod">
               <span>{props.fb_rating}</span>
            </div>
            <div className="container_copy">
               <h3>{props.date}</h3>
               <h1>{props.fb_title}</h1>
               <p>{props.fb_text}</p>
            </div>
            <MoreStyledElement light={false}>Read more</MoreStyledElement>
         </div>
      </div>
   );
}

Card.defaultProps = {
   props: {
      fb_rating: '?',
      date: '12 January 2019',
      fb_title: 'Feedback title',
      fb_text: 'Feedback text',
   },
};
export default Card;
