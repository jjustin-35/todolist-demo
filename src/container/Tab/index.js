import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import TabStyle from '../../components/Tab';

export const Tab = () => {
  let options = [
    { name: '全部', id: 'all', active: true },
    { name: '已完成', id: 'finished', active: false },
    { name: '未完成', id: 'unfinished', active: false },
  ];
  const display = useSelector((state) => state.display);
  const dispatch = useDispatch();

  const toggleTab = (targetTab) => {
    return options.map((opt) => {
      if (opt.id === targetTab) {
        if (!opt.active) {
          opt.active = !opt.active;
        }
      } else {
        if (opt.active) {
          opt.active = !opt.active;
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
