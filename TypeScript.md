# TypeScript
### Functional
```
import React from 'react';
import MenuWrapper from '../../../common/components/MenuWrapper';
import LoginProtectorHOC from '../../../common/containers/LoginProtectorHOC';

const Exp = (): JSX.Element => {

    return (
        <MenuWrapper>
            <>
                Data
            </>
        </MenuWrapper>
    );
};

export default LoginProtectorHOC(Exp);
```
```
import React from 'react';


export default function Index(): JSX.Element {
    return (
        <div>
           test
        </div>
    );
}
```

### ClassBased
```
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import get from 'lodash/get';
import MenuWrapper from '../../../common/components/MenuWrapper';
import LoginProtectorHOC from '../../../common/containers/LoginProtectorHOC';
import { PROJECT_MANAGER } from '../../../common/constants/permissions/masterList';


interface Props {
    pmEmployees: any;
    hoProjects: any;
    user: any;
    getHOProjects(): void;
    getPMEmployees(): void;
}

class HandedOverProjects extends React.Component<Props, any> {
    userType: string;

    constructor(props) {
        super(props);
        const { user } = props;
        this.userType = get(user.details, 'userGroups[0].name', PROJECT_MANAGER);
    }

    componentDidMount(): void {
        const { getHOProjects, getPMEmployees } = this.props;
        getHOProjects();
        getPMEmployees();
    }



    render(): JSX.Element {
        const { hoProjects, pmEmployees } = this.props;
        return (
            <MenuWrapper>
                <>
                   Data
                </>
            </MenuWrapper>
        );
    }
}

export default LoginProtectorHOC(HandedOverProjects);
```
