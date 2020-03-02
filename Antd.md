# Antd

## Breadcum

```
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Affix, Button } from 'antd';
import MenuWrapper from '../../../common/components/MenuWrapper';
import LoginProtectorHOC from '../../../common/containers/LoginProtectorHOC';

var states = {
    top: 100,
    bottom: 100,
};


class Antd extends React.Component {
    render(): JSX.Element {
        return (
            <MenuWrapper>
                <>
                    <div>
                        <Affix offsetTop={states.top}>

                            <Button
                                type="primary"
                                onClick={() => { states.top += 10;console.log(states.top);
                                }}
                            >
            Affix top
                                {' '}
                                {states.top}
                            </Button>
                        </Affix>
                        <br />
                        <Affix offsetBottom={states.bottom}>
                            <Button
                                type="primary"
                                onClick={() => { states.top -= 10;console.log(states.bottom);}}
                            >
            Affix bottom
                            </Button>
                        </Affix>
                    </div>

                    <div>
                        {states.top}
                    </div>
                </>
            </MenuWrapper>
        );
    }
}

export default LoginProtectorHOC(Antd);

```
## Drowpdown
```
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import MenuWrapper from '../../../common/components/MenuWrapper';
import LoginProtectorHOC from '../../../common/containers/LoginProtectorHOC';
import { Breadcrumb } from 'antd';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

class Antd extends React.Component {
    render(): JSX.Element {
        return (
            <MenuWrapper>
                <>
                <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <Icon type="down" />
    </a>
  </Dropdown>,
                </>
            </MenuWrapper>
        );
    }
}

export default LoginProtectorHOC(Antd);
```
