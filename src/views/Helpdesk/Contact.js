
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from "./Contact/components/Header";
import Employees from "./Contact/pages/Employees/Employees";


function Contact() {
    return (
        <div>
            <Header />
           <Employees />
        </div>
    );
}

export default Contact;
