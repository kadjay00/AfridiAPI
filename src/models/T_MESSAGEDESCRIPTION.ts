import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_MESSAGEDESCRIPTION', {schema: 'dbo' } )
@Index('IX_MESSAGEDESCRIPTION_PKINDEX', ['MSD_MESSAGENBR_N'], {unique: true})
export class T_MESSAGEDESCRIPTION {

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'MSD_MESSAGENBR_N',
        })
    public MSD_MESSAGENBR_N: number;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'MSD_DESCRIPFRA_C',
        })
    public MSD_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'MSD_DESCRIPNED_C',
        })
    public MSD_DESCRIPNED_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MSD_LANGUAGEKNOWN_C',
        })
    public MSD_LANGUAGEKNOWN_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MSD_FLAG1_C',
        })
    public MSD_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'MSD_FLAG2_C',
        })
    public MSD_FLAG2_C: string | null;

}
