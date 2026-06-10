export const spikeOptions = {
  stages: [
    { duration: '20s', target: 10 },
    { duration: '10s', target: 100 },
    { duration: '20s', target: 10 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.10'],
    http_req_duration: ['p(95)<2000'],
    checks: ['rate>0.85'],
  },
};
