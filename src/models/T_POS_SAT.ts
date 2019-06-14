import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_POS_SAT', {schema: 'dbo' } )
export class T_POS_SAT {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'SAT_DATE_DAT',
        })
    public SAT_DATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'SAT_SUBDEPARTMENT_N',
        })
    public SAT_SUBDEPARTMENT_N: number;

    @Column('numeric', {
        nullable: false,
        precision: 10,
        scale: 0,
        name: 'SAT_CUSTOMERS_N',
        })
    public SAT_CUSTOMERS_N: number;

    @Column('numeric', {
        nullable: false,
        precision: 10,
        scale: 0,
        name: 'SAT_ITEMS_N',
        })
    public SAT_ITEMS_N: number;

    @Column('numeric', {
        nullable: false,
        precision: 10,
        scale: 0,
        name: 'SAT_SCANS_N',
        })
    public SAT_SCANS_N: number;

    @Column('varchar', {
        nullable: false,
        length: 3,
        name: 'SAT_PRICECURRENCY_C',
        })
    public SAT_PRICECURRENCY_C: string;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'SAT_FLAG1_C',
        })
    public SAT_FLAG1_C: string | null;

}
