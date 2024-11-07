import Icon from "@/components/common/icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Muted, Paragraph } from "@/components/ui/typography";
import { TIME_ZONE } from "@/lib/constant";
import { getDateInTimeZone, getTimeZoneName } from "@/lib/utils";

interface Props {
  currentStatus: string;
}

const OrderDetailHeaderDeliverableUploaded = ({ currentStatus }: Props) => {
  const estDate = getDateInTimeZone(new Date(), TIME_ZONE.EST);
  const timeZoneName = getTimeZoneName(TIME_ZONE.EST, new Date());
  return (
    <>
      <Muted>
        {estDate} {timeZoneName}
      </Muted>
      <Paragraph className="relative before:bg-black before:content=[''] before:absolute before:top-1/2 before:-left-3 before:rounded-full before:w-1 before:h-1">
        {currentStatus}
      </Paragraph>
      <Separator orientation="vertical" className="h-5 w-1" />

      <Button>
        View/Edit Deliverable
        <Icon icon="upload" size="small" className="ml-2" />
      </Button>
    </>
  );
};

export default OrderDetailHeaderDeliverableUploaded;
