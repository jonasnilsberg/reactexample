import Grid from '@material-ui/core/Grid';
import React from 'react';

class Header extends React.Component {
    render() {
        const styles = {
            textAlign: 'center',
            backgroundColor: "#FF0000"
        }
        const spacing = this.props.spacing;
        const size = this.props.size;
        const title = this.props.title;
        return (       
            <div style={styles}>
                <Grid container spacing={spacing}>
                    <Grid item xs={size}>
                        <h1>{title}</h1>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Header;
