import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Navbar from '../component/Navbar';

import Beranda from '../pages/Beranda';
import Kategori from '../pages/Kategori';
import Daftar from '../pages/Daftar';
import { Button, Welcome } from '@storybook/react/demo';

storiesOf('component', module)
    .add('Navbar', () => <Navbar />);

storiesOf('pages', module)
    .add('Kategori', () => <Kategori />)
    .add('Daftar', () => <Daftar />)
    .add('Beranda', () => <Beranda />)
;

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
        😀 😎 👍 💯
            </span>
        </Button>
    ));
