import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import {fetchVersion} from '@site/src/utils/Api';

class AndroidVersionBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            version: ''
        };
    }

    componentDidMount() {
        fetchVersion("Android", "Android").then(version => {
            this.setState({
                version
            })
        });
    }

    render() {
        return (
            <div>
                <CodeBlock
                    metastring={'{2} title="build.gradle"'}
                    className={'groovy'}
                    children={'dependencies {\n' +
                    `  implementation 'com.shakebugs.android:shake:${this.state.version}'\n` +
                    '}'}/>
                <br/>
            </div>
        );
    }
}

export default AndroidVersionBlock;
