import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        const { search } = this.props.location;
        this.queryParams = new URLSearchParams(search);
    }
    
    handleNavigate = () => {
        this.props.history.push('/posts');
    }

    render() {
        console.log(this.props);
        console.log(this.props.match.params);
        console.log(this.props.location.search);
        console.log(this.queryParams.get('meuQueryParam'));

        return (
            <>
                <button onClick={this.handleNavigate}>Voltar para lista de posts</button>
                <h1>Post page</h1>
            </>
        );
    }
}

/*export default function Post() {
    const params = useParams();
    const { search } = useLocation();

    const queryParams = useMemo(() => new URLSearchParams(search), [search]);

    return <h1>Post page</h1>;
}*/
