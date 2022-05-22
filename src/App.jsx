import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbarData={props.appData.navbar}/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        store={props.store}
                        dispatch={props.dispatch}
                        dialogsData={props.appData.messagePage.dialogsData}
                        messagesData={props.appData.messagePage.messagesData}/>}/>
                    <Route path={'/profile'} render={() => <Profile
                        store={props.store}
                        dispatch={props.dispatch}
                        postData={props.appData}/>}/>
                </div>
            </div>
        </BrowserRouter>


    );
}
export default App;
