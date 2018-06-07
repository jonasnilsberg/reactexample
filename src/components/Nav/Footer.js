import ArrowBack from '@material-ui/icons/ArrowBack'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';





class Footer extends React.Component {

    nextTask(){
        this.props.changeTask(1);
    }

    previousTask(){
        this.props.changeTask(-1);
    }

    render() {
        const styles = {
            textAlign: 'center',
            position:'absolute',
            left:0,
            bottom:5,
            right:0
        }

        return (       
            <div className='footer' style={styles}>
            <Grid container spacing="0">
                    <Grid item xs="6">
                        <Button variant="contained" color="primary" onClick={this.previousTask.bind(this)}>
                            <ArrowBack></ArrowBack>
                            Forrige oppgave
                        </Button>
                    </Grid>
                    <Grid item xs="6">
                        <Button variant="contained" color="primary" onClick={this.nextTask.bind(this)}>
                            Neste oppgave
                            <ArrowForward></ArrowForward>
                        </Button>
                    </Grid>
                    
                </Grid>
                <div>
                </div>
            </div>
        );
    }
}

export default Footer;
