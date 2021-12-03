import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import {fetchVersion} from '@site/src/utils/Api';

class FlutterVersionBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            version: ''
        };
    }

    componentDidMount() {
        fetchVersion("Flutter", "Android").then(version => {
            this.setState({
                version
            })
        });
    }

    render() {
        return (
            <div>
                <CodeBlock
                    metastring={'{2} title="pubspec.yaml"'}
                    className={'yaml'}
                    children={'dependencies:\n' +
                    `    shake_flutter: ^${this.state.version}`}/>
            </div>
        );
    }
}

export default FlutterVersionBlock;
