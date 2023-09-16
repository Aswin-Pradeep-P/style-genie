import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from '@material-tailwind/react';
import { ClockIcon, CheckIcon, EllipsisVerticalIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

import { statisticsCardsData, statisticsChartsData, projectsTableData, ordersOverviewData } from './data';
import { Button, Paper } from '@mui/material';
import { useGetHomePageMutation, useGetProfileMutation } from '@Containers/Home/apiSlice';
import LocalStorage from '@Utils/storage';
import { generatePatternsImages } from '@Utils/s3Service';
import Loader from '@Components/Loader';
import { StatisticsCard } from "./widgets/cards/statistics-card";
import { StatisticsChart } from "./widgets/charts/statistics-chart";


export const Dashboard = ({ activeTab }: { activeTab: number }) => {
  return (
    <div className="mt-12">
      {activeTab === 0 && (
        <div className="mb-12 grid gap-y-10 grid-cols-1">
          {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
            <StatisticsCard
              key={title}
              {...rest}
              title={title}
              icon={React.createElement(icon, {
                className: 'w-6 h-6 text-white',
              })}
              footer={
                <Typography className="font-normal text-blue-gray-600">
                  <strong className={footer.color}>{footer.value}</strong>
                  &nbsp;{footer.label}
                </Typography>
              }
            />
          ))}
        </div>
      )}
      {[1, 2, 3].includes(activeTab) && (
        <StatisticsChart
          key={statisticsChartsData[activeTab - 1].title}
          {...statisticsChartsData[activeTab - 1]}
          footer={
            <Typography variant="small" className="flex items-center font-normal text-blue-gray-600">
              <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
              &nbsp;{statisticsChartsData[activeTab - 1].footer}
            </Typography>
          }
        />
      )}
    </div>
  );
};

export const Designs = () => {
  const [getAllProducts, { data }] = useGetHomePageMutation();
  const id = LocalStorage.getItem('genie-user-id');

  useEffect(() => {
    getAllProducts({ id });
  }, []);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
        {data?.out?.slice(0, 6)?.map((item) => {
          return (
            <Paper
              style={{
                padding: 10,
                background: 'white',
                margin: '10px 10px',
                justifyContent: 'space-between',
                cursor: 'pointer',
                fontSize: '14px',
                height: '190px',
                width: '150px',
              }}
            >
              {/* <div>{item.image_url}</div> */}
              <img alt={item.image_url} src={item.image_url} style={{ width: '140px', height: '170px' }} />
            </Paper>
          );
        })}
      </div>
    </div>
  );
};

export const Materials = () => {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState(null);

  const handleChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    setLoading(true);
    generatePatternsImages(
      fileObj,
      (res: any, url: string) => {
        setLoading(false);
        setImages(res.data.variations);
        setUrl(url);
      },
      () => {
        setLoading(false);
      }
    );
  };

  console.log();

  const regenerate = () => {
    setLoading(true);
    axios
      .post('https://b481-103-181-238-106.ngrok-free.app/api/variations', {
        image_url: url,
      })
      .then((response) => {
        setLoading(false);
        setImages(response.data.variations);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  console.log(loading);

  return (
    <>
      {images.length === 0 && (
        <img
          style={{ height: '300px', width: '300px', marginTop: '100px' }}
          src="/assets/icons/generate_designs.svg"
          alt="generate-design"
        />
      )}
      <Button
        onClick={() => (!url ? inputRef.current.click() : regenerate())}
        style={{ background: '#40798C', color: 'white' }}
      >
        {images.length ? 'Regenerate' : 'Generate Patterns'}
        <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={handleChange} />
      </Button>
      {loading && <Loader />}
      <div
        style={{ height: '600px', overflow: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        {!loading &&
          images.map((src) => {
            return (
              <img
                style={{ marginBottom: '10px', height: '300px', borderRadius: '5px' }}
                src={src}
                key={src}
                alt={`generated_image-${1}}`}
              />
            );
          })}
      </div>
    </>
  );
};

export const Orders = () => {
  return (
    <Card>
      <CardHeader floated={false} shadow={false} color="transparent" className="m-0 p-6">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Orders Overview
        </Typography>
        <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600">
          <ArrowUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-green-500" />
          <strong>24%</strong> this month
        </Typography>
      </CardHeader>
      <CardBody className="pt-0">
        {ordersOverviewData.map(({ icon, color, title, description }, key) => (
          <div key={title} className="flex items-start gap-4 py-3">
            <div
              className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                key === ordersOverviewData.length - 1 ? 'after:h-0' : 'after:h-4/6'
              }`}
            >
              {React.createElement(icon, {
                className: `!w-5 !h-5 ${color}`,
              })}
            </div>
            <div>
              <Typography variant="small" color="blue-gray" className="block font-medium">
                {title}
              </Typography>
              <Typography as="span" variant="small" className="text-xs font-medium text-blue-gray-500">
                {description}
              </Typography>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};
