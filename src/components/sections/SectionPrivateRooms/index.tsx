import { useDispatch, useSelector } from 'react-redux';
import { useEffect, forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppDispatch } from '../../../store';
import { roomsSelector, roomsThunks } from '../../../store/rooms';
import styles from './index.module.css';
import { PrivateRoomsList } from './PrivateRoomsList';
import { Status } from '../../../utils/enums/status.enum';
import { RLoader } from '../../RLoader';
import { Pagination } from '../../ui/Pagination';
import { RListIsEmpty } from '../../RListIsEmpty';
import { RAccordion } from '../../RAccordion';

export const SectionPrivateRooms = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { privateRoomsData, privateRoomsStatus } = useSelector(roomsSelector);

  useEffect(() => {
    const getPrivateRooms = async () => {
      await dispatch(roomsThunks.getPrivateRooms({ page: currentPage }));
    };

    getPrivateRooms();
  }, [dispatch, currentPage]);

  return (
    <section id="private-rooms" className={styles.sectionPrivate} ref={ref}>
      <RAccordion title={t('rooms.private')}>
        <div className={styles.content}>
          {privateRoomsStatus === Status.Loading && <RLoader />}
          {privateRoomsData?.rooms.length === 0 && <RListIsEmpty />}
          {privateRoomsData &&
            privateRoomsData?.rooms.length > 0 &&
            privateRoomsStatus === Status.Succeeded && (
              <PrivateRoomsList rooms={privateRoomsData.rooms} />
            )}
        </div>

        <Pagination
          pageCount={privateRoomsData?.totalPages}
          handlePageClick={(paginationState) =>
            setCurrentPage(paginationState.selected + 1)
          }
        />
      </RAccordion>
    </section>
  );
});
