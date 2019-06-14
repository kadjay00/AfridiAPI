import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ORDER_FCHEADER_CATEGORY', {schema: 'dbo' } )
export class T_ORDER_FCHEADER_CATEGORY {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'OHC_SUBDEPARTMENT_N',
        })
    public OHC_SUBDEPARTMENT_N: number;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'OHC_HEADER_N',
        })
    public OHC_HEADER_N: number;

    @Column('char', {
        nullable: true,
        name: 'OHC_FLAG1_C',
        })
    public OHC_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'OHC_FLAG2_C',
        })
    public OHC_FLAG2_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'OHC_FLAG3_C',
        })
    public OHC_FLAG3_C: string | null;

}
