import React from 'react';
import AppHeader from './Todo_List/components/AppHeader';
import PageTitle from './Todo_List/components/PageTitle';
import TasksContent from './Todo_List/components/TasksContent';
import './Todo_List/styles/GlobalStyles.css';
import AppStyle from './Todo_List/styles/modules/app.module.scss';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <main className="container">
      <PageTitle id="as"> Todo List </PageTitle>
      <section className={AppStyle.app__wrapper}>
        <AppHeader/>
        <TasksContent/>        
   
      </section>
      <Toaster
        position='bottom-right'
        toastOptions={{
          style: {
            fontSize:'1.4rem'
          }
      }}
      />
    </main>
  );
}

export default App;