import * as React from 'react';
import { DdItem } from '../models/models';
interface ddProps {
    ddList: DdItem[];
    ddHeader: string;
    ddOpen: boolean;
}
declare const MemDropdown: React.MemoExoticComponent<({ ddList, ddHeader, ddOpen }: ddProps) => JSX.Element>;
export default MemDropdown;
