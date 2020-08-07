import React from 'react';
import {fetchVersion} from '@site/src/utils/Api';

class VersionValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            version: ''
        };
    }

    componentDidMount() {
        const {platform, os} = this.props;
        fetchVersion(platform, os).then(version => {
            this.setState({
                version
            })
        });
    }

    render() {
        return (
            <span>{this.state.version}</span>
        );
    }
}

export default VersionValue;
