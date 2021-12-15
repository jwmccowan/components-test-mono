import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '@ds/components';
import AddIcon from '@mui/icons-material/Add';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DS</title>
        <meta name='description' content='Generated by John' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Button
          variant='outlined'
          color='secondary'
          sx={{ mr: '18px' }}
          isDisabled
        >
          Cancel
        </Button>
        <Button variant='contained' startIcon={<AddIcon />}>
          Add Resource
        </Button>
      </main>
    </div>
  );
};

export default Home;