import {
    addNewMessageActionCreator,
    PostDataType,
    updateNewPostTextActionCreator
} from "../../../state/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../state/redux-store";
import {Dispatch} from "redux";

/*const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    if(store){
                        let state = store.getState();

                        const addPosts = () => {
                            store.dispatch(addNewMessageActionCreator())
                        }

                        const onePostChange = (text: string) => {
                            store.dispatch(updateNewPostTextActionCreator(text))
                        }
                        return <MyPosts updateNewPostText={onePostChange}
                                        addNewMessage={addPosts}
                                        postData={state.profilePage.postData}
                                        newPostText={state.profilePage.newPostText}/>
                    }



                }
            }
        </StoreContext.Consumer>

    );
};*/
type mapStatePropsType = {
    postData: PostDataType
    newPostText: string
}
type mapDispatchPropsType = {
    updateNewPostText:(text: string)=>void
    addNewMessage: ()=> void
}
export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType;

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
  return {
      postData: state.profilePage.postData,
      newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        updateNewPostText: (text: string)=>{
            dispatch(updateNewPostTextActionCreator(text))
        },
        addNewMessage: ()=>{
            dispatch(addNewMessageActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;