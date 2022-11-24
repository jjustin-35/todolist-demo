import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import TabStyle from '../../components/Tab';

export const Tab = () => {
  let options = [
    { name: 'all', id: 'all', isActive: true },
    { name: 'finished', id: 'finished', isActive: false },
    { name: 'unfinished', id: 'unfinished', isActive: false },
  ];
  const display = useSelector((state) => state.display);
  const dispatch = useDispatch();

  const toggleTab = (targetTab) => {
    return options.map((opt) => {
      if (opt.id === targetTab) {
        if (!opt.isActive) {
          opt.isActive = !opt.isActive;
        }
      } else {
        if (opt.isActive) {
          opt.isActive = !opt.isActive;
        }
      }
    });
  };

  toggleTab(display);

  const onTab = (e) => {
    if (e.target.id === 'all') {
      dispatch(actions.getAll());
    } else if (e.target.id === 'finished') {
      dispatch(actions.getIsFinishedTrue());
    } else if (e.target.id === 'unfinished') {
      dispatch(actions.getIsFinishedFalse());
    }
  };
  return (
    <>
      <TabStyle options={options} onTab={onTab} />
    </>
  );
};
