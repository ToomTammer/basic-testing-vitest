import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';


//Spies
describe('generateReportData()', () => 
{
    it('should execute logFn if provided', () =>{
        const logger = vi.fn();

        // logger.mockImplementation(() => {});

        generateReportData(logger);
        

        expect(logger).toBeCalled();
    });
});