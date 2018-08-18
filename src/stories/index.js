import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Navbar from '../component/Navbar';

import Beranda from '../pages/Beranda';
import Kategori from '../pages/Kategori';
import Daftar from '../pages/Daftar';
import { Button, Welcome } from '@storybook/react/demo';

import ProdukList from '../Admin/produk/List';
import ProdukCreate from '../Admin/produk/Create';
import ProdukUpdate from '../Admin/produk/Update';
import ProdukDelete from '../Admin/produk/Delete';

import CategoryList from '../Admin/category/List';
import CategoryCreate from '../Admin/category/Create';
import CategoryUpdate from '../Admin/category/Update';
import CategoryDelete from '../Admin/category/Delete';

import SellerList from '../Admin/seller/List';
import SellerCreate from '../Admin/seller/Create';
import SellerUpdate from '../Admin/seller/Update';
import SellerDelete from '../Admin/seller/Delete';

storiesOf('Admin', module)
    .add('Seller List', () => <SellerList />)
    .add('Seller Create', () => <SellerCreate />)
    .add('Seller Update', () => <SellerUpdate />)
    .add('Seller Delete', () => <SellerDelete />);

storiesOf('Admin', module)
    .add('Category List', () => <CategoryList />)
    .add('Category Create', () => <CategoryCreate />)
    .add('Category Update', () => <CategoryUpdate />)
    .add('Category Delete', () => <CategoryDelete />);

storiesOf('Admin', module)
    .add('Produk List', () => <ProdukList />)
    .add('Produk Create', () => <ProdukCreate />)
    .add('Produk Update', () => <ProdukUpdate />)
    .add('Produk Delete', () => <ProdukDelete />);

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
