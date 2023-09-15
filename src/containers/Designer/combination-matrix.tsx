import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export function NeckList() {
  return (
    <Card>
      <div className="text-sm text-blue-2 px-5 py-1">Neck combinations</div>
      <List className="w-[354px]">
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-react"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              V-neck
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-vue"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-vue"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Turtle neck
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-svelte"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="vertical-list-svelte"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">
              Round neck
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
}

const ColorIcon = ({ color }: { color: string }) => {
  return (
    <div
      className="flex items-center justify-center w-8 h-8 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
};

export function ColorPicker() {
  return (
    <Card>
      <div className="text-sm text-blue-2 px-5 py-1">Dress color</div>
      <div className="flex px-5 py-5">
        <Checkbox
          name="type"
          label={<ColorIcon color="#0e5547" />}
          ripple={true}
        />
        <Checkbox
          name="type"
          label={<ColorIcon color="#225e29" />}
          ripple={true}
        />
        <Checkbox
          name="type"
          label={<ColorIcon color="#611d1d" />}
          ripple={true}
        />
        <Checkbox
          name="type"
          label={<ColorIcon color="#481947" />}
          ripple={true}
        />
      </div>
    </Card>
  );
}
