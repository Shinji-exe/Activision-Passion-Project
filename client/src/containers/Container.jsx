import {useState,useEffect} from "react";
import { Switch, Route, useHistory} from "react-router";
import {getAllPosts, getOnePost, postPost, putPost, deletePost} from "../services/posts";
import {getAllComments, postComment, putComment, deleteComment} from "../services/comments"
import PostCreate from '../components/PostCreate/PostCreate';
import PostEdit from "../components/PostEdit/PostEdit"
import PostDetail from "../components/PostDetail/PostDetail"
import Post from "../components/Posts/Posts"
import Trend from '../components/Trend/Trend';
import CommentCreate from '../components/Comment/CommentCreate';
import Blog from '../components/Blog/Blog';
import Main from "../components/Main/Main"
import Posts from "../components/Posts/Posts";
export default function Container(props) {
    console.log("container props", props) 

    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const {currentUser} = props;
    const history = useHistory();

    useEffect(()=> {
        const fetchPost = async ()=> {
            const postList = await getAllPosts();
            setPosts(postList);
        };
        fetchPost();
    }, [])



    // useEffect(()=>{
    //     const 
    // })

    useEffect(()=> {
        const fetchComments = async ()=> {
            const commentList = await getAllComments();
            setComments(commentList);
        }
        fetchComments();
    }, []);

    const handleCreate = async (formData) => {
        const postData = await postPost(formData);
        setPosts((prevState) => [...prevState, postData])
        history.push("/blog")
    }

    const handleUpdate = async (id, formData) => {
        const postData = await putPost(id, formData);
        setPosts((prevState)=>
        prevState.map((post)=>{
            return post.id  === Number(id) ? postData : post
        })
        );
        history.push('/blog')
    }

    const handleDelete = async (id) => {
        await deletePost(id);
        setPosts((prevState)=>prevState.filter((post) => post.id !== id))
    };

    const handleMake = async (formData) => {
        const commentData = await postComment(formData);
        setComments((prevState)=> 
        [...prevState, commentData])
        history.push("/create-comment")
    }

  return (
    <div>
      <Switch>
          <Route path="/create-comment">
              <CommentCreate handleMake={handleMake} currentUser={currentUser}/>
          </Route>
        <Route path="/create-post">
          <PostCreate handleCreate= {handleCreate}/>
        </Route>
        <Route path="/posts/:id/edit">
         <PostEdit posts={posts} handleUpdate={handleUpdate}/>
        </Route>
        <Route path="/trend">
          <Trend />
        </Route>
        <Route path="/posts/:id">
            <PostDetail comments={comments}/>
        </Route>
        <Route path="/blog">
          <Blog posts={posts} handleDelete={handleDelete} currentUser={currentUser}/>
        </Route>
        <Route path="/">
          <Main currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}


/* <Route path="/create-comment">
          <CommentCreate />
        </Route> */