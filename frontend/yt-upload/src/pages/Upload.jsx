import TitleIcon from "@mui/icons-material/Title";

import { CloudUpload, Visibility, Publish } from "@mui/icons-material";
import DescriptionIcon from "@mui/icons-material/Description";

import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@mui/material";
import React from 'react';

function Upload() {
  return (
    <Container maxWidth="md">
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          marginTop: 5,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          //sx={{ fontWeight: "bold" }}
          fontWeight={"bold"}
        >
          Upload Here
        </Typography>
        <Typography align="center">
          Please upload your file in MP4 format with a maximum size of 50MB.
        </Typography>

        <Box display="flex" flexDirection="column" marginTop={3} gap={3}>
          <TextField
            label={"Video Title"}
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <Title color="primary"></Title>{" "} */}
                    <TitleIcon color="primary" />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            label={"Video Description"}
            variant="outlined"
            fullWidth
            multiline
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <Title color="primary"></Title>{" "} */}
                    {/* <TitleIcon color="primary" /> */}
                    <DescriptionIcon color="primary" />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Box
            display="flex"
            alignContent={"center"}
            justifyContent={"space-between"}
          >
            <input
              type="file"
              accept="video/"
              id="video-upload"
              style={{ display: "none" }}
              onChange={null}
            />
            <label htmlFor="video-upload">
              <Button
                variant="contained"
                component="span"
                color="secondary"
                startIcon={<CloudUpload />}
              >
                Upload Video Here
              </Button>
            </label>
          </Box>

          <FormControl fullWidth>
            <InputLabel>Visibility of Video</InputLabel>
            <Select
              label="Visibility"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Visibility color="primary" />
                    </InputAdornment>
                  ),
                },
              }}
            >
              <MenuItem value="public">Public</MenuItem>
              <MenuItem value="public">Unlisted</MenuItem>
              <MenuItem value="public">Private</MenuItem>
            </Select>
          </FormControl>
          <Box display={'flex'} justifyContent='center'>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Publish />}
              fontWeight="bold"
              padding={1.5}
            > Publish</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Upload
