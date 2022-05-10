import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { maxLengthCreater } from '../../../utils/Validators/validators';
import { TextArea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo(props => {
    // shouldComponentUpdate(nextProps, nextStatus) {
    //     return nextProps !== this.props || nextStatus !== this.state;
    // }
    console.log("hi")
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength = maxLengthCreater(100);

const addNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={TextArea}
                placeholder="Post message"
                validate={[maxLength]}
                name="newPostText"
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPost" })(addNewPostForm);

export default MyPosts;