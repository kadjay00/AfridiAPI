import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_FORPLANNXLS', {schema: 'dbo' } )
export class T_FORPLANNXLS {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'FAX_DATE_DAT',
        })
    public FAX_DATE_DAT: Date;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'FAX_TYPE_C',
        })
    public FAX_TYPE_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'FAX_FROM_C',
        })
    public FAX_FROM_C: string;

    @Column('varchar', {
        nullable: false,
        length: 5,
        name: 'FAX_TO_C',
        })
    public FAX_TO_C: string;

    @Column('decimal', {
        nullable: false,
        precision: 19,
        scale: 9,
        name: 'FAX_CUSTOMERS_D',
        })
    public FAX_CUSTOMERS_D: number;

    @Column('decimal', {
        nullable: false,
        precision: 19,
        scale: 9,
        name: 'FAX_ITEMS_D',
        })
    public FAX_ITEMS_D: number;

    @Column('int', {
        nullable: true,
        name: 'FAX_CASHIERS_N',
        })
    public FAX_CASHIERS_N: number | null;

}
