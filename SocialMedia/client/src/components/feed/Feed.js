import React, { useEffect,useState} from 'react'
import Follower from '../follower/Follower'
import Post from '../post/Post'
import './Feed.scss'
import {useSelector, useDispatch} from 'react-redux';
import { getFeedData } from '../../redux/slices/feedSlice';
import { AiFillCloseCircle} from "react-icons/ai";
import { SlPeople} from "react-icons/sl";
function Feed() {

  const dispatch = useDispatch();
  const feedData = useSelector(state => state.feedDataReducer.feedData)
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    dispatch(getFeedData());
  }, [dispatch])

  return (
    <div className="Feed">
        <div className="container">
          <div className="left-part">
            {feedData?.posts?.map(post => <Post key={post._id} post={post} />)}
          </div>
          <div className={isActive ? "box" : "box-res"} onClick={ToggleClass}> <SlPeople className='People'></SlPeople> </div>
         
          <div className={isActive ? "right-part" : "res-si"}>
            
            <div className="following">
              <h3 className="title">You Are Following <AiFillCloseCircle className='close' onClick={ToggleClass}></AiFillCloseCircle></h3>
              
              {feedData?.followings?.map(user => <Follower className="name" key={user._id} user={user}/>)}
            </div>
            <div className="suggestions">
              <h3 className="title">Suggested For You</h3>
              {feedData?.suggestions?.map(user => <Follower className="name" key={user._id} user={user}/>)}
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default Feed