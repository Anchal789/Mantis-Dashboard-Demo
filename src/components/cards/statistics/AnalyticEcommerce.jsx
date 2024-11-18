import PropTypes from 'prop-types';

// material-ui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';

// assets
import RiseOutlined from '@ant-design/icons/RiseOutlined';
import FallOutlined from '@ant-design/icons/FallOutlined';
import { Button } from '@mui/material';

const iconSX = { fontSize: '0.75rem', color: 'inherit', marginLeft: 0, marginRight: 0 };

export default function AnalyticEcommerce({ color = 'primary', title, count, percentage, isLoss, extra }) {
  return (
    <MainCard contentSX={{ p: 2.25 }}>
      <Stack spacing={0.5}>
        <div className='flex w-full justify-between'>

          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
          <div className='flex items-center gap-1'>

            <Button size="small" variant="outlined" sx={{ textTransform: 'capitalize' }}>
              Add
            </Button>

            <Button size="small" variant="outlined" sx={{ textTransform: 'capitalize' }}>
              List
            </Button>
          </div>
        </div>
        <Grid container alignItems="center" gap={"10px"}>
          <Grid item>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
          </Grid>

          <Grid item>
            <Chip
              variant="combined"
              color={color}
              label={`${percentage}`}
              size="small"
            />
          </Grid>

        </Grid>
      </Stack>
      <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" color="text.secondary">
          {/* You made an extra{' '} */}
          {extra}
          {/* <Typography variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
          </Typography>{' '}
          this year */}
        </Typography>
      </Box>
    </MainCard>
  );
}

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.string
};
